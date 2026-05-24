## Design Decisions

I used database transactions during reservation creation to
prevent overselling when multiple users try reserving the
same inventory simultaneously.

## Expiry Strategy

Reservations expire automatically after 10 minutes.
Expired reservations can be cleaned using either:
- lazy cleanup during reads
- scheduled cron jobs

## Tradeoffs

I avoided introducing Redis locking initially to keep the
system simpler and easier to reason about.

## Future Improvements

- Add idempotency keys
- Add Redis-based distributed locking
- Add websocket-based stock updates