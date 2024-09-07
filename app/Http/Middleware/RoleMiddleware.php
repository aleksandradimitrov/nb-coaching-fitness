<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if (!Auth::check()) {
            // Redirect to login if the user is not authenticated
            return redirect('/login');
        }

        $user = Auth::user();

        // Check if the user has any of the specified roles
        if (!$user->hasAnyRole($roles)) {
            // Optionally, redirect or abort with a 403 response
            abort(403, 'Unauthorized access');
        }

        return $next($request);
    }
}