import { Observable, timer } from 'rxjs';
import { concatMap } from 'rxjs/operators';

export const stopOn = <T>(predicate?: (x: T) => boolean) => (
  source: Observable<T>
) => {
  return new Observable<T>(subscriber => {
    let s = source.subscribe({
      next(value) {
        if (predicate && predicate(value)) {
          s.unsubscribe();
        }
        subscriber.next(value);
      },
      error(error) {
        subscriber.error(error);
      },
      complete() {
        subscriber.complete();
      }
    });
    return s;
  });
};

export function poll<T>(
  source: Observable<T>,
  pollingTime: number,
  stopPollWhen?: (x: T) => boolean
) {
  return timer(0, pollingTime).pipe(
    concatMap(_ => source),
    stopOn(stopPollWhen)
  );
}
