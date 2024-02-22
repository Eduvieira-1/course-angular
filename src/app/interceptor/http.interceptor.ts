import { shareReplay, catchError, throwError, retry } from 'rxjs';
import { HttpInterceptorFn, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = new HttpHeaders().set('study-angular', 'dev')
  const reqClone = req.clone({ headers});
  return next(reqClone).pipe(
    shareReplay(),
    retry({ count: 2, delay: 1000}),
    catchError((error: HttpErrorResponse) => {
      return throwError(() => error)
    })
  );
};
