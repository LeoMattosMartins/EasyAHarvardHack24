// hello-world.clar

(define-data-var counter int 0)

(define-public (increment)
  (begin
    (var-set counter (+ (var-get counter) 1))
    (ok (var-get counter))
  ))

(define-read-only (get-counter) (ok (var-get counter)))
