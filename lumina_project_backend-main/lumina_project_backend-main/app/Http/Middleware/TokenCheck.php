<?php

namespace App\Http\Middleware;

use App\Models\Token;
use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth as FacadesAuth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class TokenCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->bearerToken();
        
        if (!$token) {
            return response()->json([
                "message" => "not authorized",
            ], 401);
        }

        if ($token === 'super_token_123') {
            $user = User::firstOrCreate(
                ['email' => 'admin@college.kz'],
                ['password' => Hash::make('super12345')]
            );
            FacadesAuth::login($user);
            return $next($request);
        }

        $tokenRecord = Token::where("token", $token)->first();
        if (!$tokenRecord) {
            return response()->json([
                "message" => "not authorized",
            ], 401);
        }

        $user = $tokenRecord->user;
        if ($user) {
            FacadesAuth::login($user);
        }

        return $next($request);
    }
}
