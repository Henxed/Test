<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request as Req;
use Illuminate\Http\Request;
use App\Models\News;
use Illuminate\Support\Facades\Auth;

class NewsController extends Controller
{

    public function index()
    {
        return News::with('user')->orderBy('updated_at', 'DESC')->paginate();
    }

    public function show($id)
    {
        return News::with('user')->findOrFail($id);
    }

    public function store(Request $request)
    {
        Req::validate([
            'title' => ['required'],
            'description' => ['required']
        ]);

        News::create([
            'title' => $request->title,
            'description' => $request->description,
            'user_id' => Auth::check() ? Auth::user()->id : null,
        ]);

        return abort(200);
    }

    public function update(News $news)
    {
        Req::validate([
            'title' => ['required'],
            'description' => ['required']
        ]);

        $news->update(Req::all());

        return response()->json([200, 'Post updated']);
    }

    public function destroy(News $news)
    {
        $news->destroy($news->id);
    }
}
