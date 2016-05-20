#!/bin/bash
docker run -d -p "80:80" \
-v /home/ec2-user/myob-test/start.sh:/opt/myob/start.sh \
-v /home/ec2-user/myob-test/public:/opt/myob/public \
-v /home/ec2-user/myob-test/app.js:/opt/myob/app.js \
-v /home/ec2-user/myob-test/tax/rate.json:/opt/myob/public/rate.json \
myob
