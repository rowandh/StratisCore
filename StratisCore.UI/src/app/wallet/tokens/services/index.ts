import { timer, interval, race, throwError, Observable } from "rxjs";
import { map, mergeMap,  first, takeUntil, tap } from "rxjs/operators";

export const pollWithTimeOut = (pollingInterval: number, maxTimeout: number, poll: Observable<any>) => {
    let timeOut = timer(maxTimeout).pipe(map(_ => null));

    // Polls for a receipt on an interval and only emits when a receipt is found
    const pollReceipt = interval(pollingInterval)
      .pipe(mergeMap(_ => poll));

    return race(timeOut, pollReceipt);
}