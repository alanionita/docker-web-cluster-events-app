# MongoDB 

Main db service

Used Bitnami because as it turns out the official image doesn't handle `MONGODB_INIT_*` environment variables correctly.

This leads to admin accounts not being created... which is VERY BAD.

Bitnami, however, works :shrug: