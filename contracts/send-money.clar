(define-map transactions
    ((id uint)) ;; Unique transaction ID for logging
    ((sender principal) (receiver principal) (amount uint)))

(define-private (generate-transaction-id)
    (ok (block-height)))

(define-public (send-money (receiver principal) (amount uint))
    (let
        (
            ;; Generate a unique transaction ID based on the block height
            (tx-id (unwrap-panic (generate-transaction-id)))
            ;; Get the balance of the sender
            (sender-balance (stx-get-balance tx-sender))
        )
        (if (>= sender-balance amount)
            (begin
                (try! (stx-transfer? amount tx-sender receiver))
                (map-set transactions
                         ((id tx-id))
                         ((sender tx-sender) (receiver receiver) (amount amount)))
                (ok { "status": "success", "amount": amount, "tx-id": tx-id })
            )
            ;; If sender doesn't have enough funds, return an error
            (err "Insufficient funds")
        )
    )
)