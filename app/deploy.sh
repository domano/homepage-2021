#!/usr/bin/env bash
set -e
set -x

IMAGE_NAME="registry.gomano.de/homepage/app"
IMAGE_NAME_STAMPED="${IMAGE_NAME}:$(date +"%s")"
docker build -t "$IMAGE_NAME_STAMPED" .
docker tag "$IMAGE_NAME_STAMPED" $IMAGE_NAME:latest
docker push "$IMAGE_NAME_STAMPED"
docker push $IMAGE_NAME:latest
kubectl apply -f "${PWD}"/kubernetes.yml
kubectl rollout restart deployment homepage-2021