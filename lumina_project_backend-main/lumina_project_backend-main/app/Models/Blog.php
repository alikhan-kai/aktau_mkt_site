<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str;

class Blog extends Model
{
    protected $fillable = ['title', 'slug', 'description', 'text', 'image'];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($blog) {
            if (empty($blog->slug)) {
                $baseSlug = Str::slug(Str::ascii($blog->title));
                if (empty($baseSlug) || strlen($baseSlug) < 2) {
                    $baseSlug = 'news-' . Str::random(8);
                }
                $blog->slug = strtolower($baseSlug . '-' . Str::random(5));
            }
        });
    }
}
