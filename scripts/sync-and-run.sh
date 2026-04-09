#!/usr/bin/env bash
set -euo pipefail

MODE="${1:-web}"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
REMOTE_REF="origin/${BRANCH}"

echo "[sync-and-run] branch: ${BRANCH}"
echo "[sync-and-run] fetching latest refs..."
git fetch --all

if git show-ref --verify --quiet "refs/remotes/${REMOTE_REF}"; then
  echo "[sync-and-run] hard resetting to ${REMOTE_REF} ..."
  git reset --hard "${REMOTE_REF}"
else
  echo "[sync-and-run] warning: ${REMOTE_REF} not found, skip reset"
fi

echo "[sync-and-run] cleaning untracked files..."
git clean -fdx

echo "[sync-and-run] installing dependencies..."
npm install

if [[ "${MODE}" == "native" ]]; then
  echo "[sync-and-run] starting Expo (native): npx expo start --clear"
  npx expo start --clear
else
  echo "[sync-and-run] starting Expo (web): npx expo start --web --clear"
  npx expo start --web --clear
fi
