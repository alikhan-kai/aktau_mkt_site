<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Document extends Model
{
    protected $guarded=[];
    
    public static function boot()
    {
        parent::boot();

        static::creating(function ($document) {
            if (empty($document->slug)) {
                $baseSlug = Str::slug(Str::ascii($document->title));
                if (empty($baseSlug) || strlen($baseSlug) < 2) {
                    $baseSlug = 'doc-' . Str::random(8);
                }
                $document->slug = strtolower($baseSlug . '-' . Str::random(5));
            }
        });
    }
}
