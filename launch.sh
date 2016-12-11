#!/bin/bash

docker build -t helloworldintent . ; docker service rm HelloIntent; docker service create --name HelloIntent --network funker helloworldintent

