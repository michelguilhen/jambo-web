import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, finalize, tap } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  // const snackbar : SnackbarService = inject(SnackbarService);
  const spinner: NgxSpinnerService = inject(NgxSpinnerService);
  const snackbar: MatSnackBar = inject(MatSnackBar);

  return next(req).pipe(
    tap(() => {
      spinner.show();
    }),
    finalize(() => {
      spinner.hide();
    }),
    catchError((err) => {
      snackbar.open('An error ocurred', 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      throw err;
    })
  );
};
