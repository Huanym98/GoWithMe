#!/usr/bin/env bash
set -euo pipefail

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
LOCAL_HASH="$(git rev-parse --short HEAD)"
NOW_UTC="$(date -u +"%Y-%m-%d %H:%M:%S UTC")"

echo "[version] branch: ${BRANCH}"
echo "[version] local commit: ${LOCAL_HASH}"
echo "[version] checked at: ${NOW_UTC}"

if git diff --quiet && git diff --cached --quiet; then
  echo "[version] working tree: clean"
else
  echo "[version] working tree: dirty (有未提交改动)"
fi

git fetch --all --quiet || true

REMOTE_REF="origin/${BRANCH}"
if git show-ref --verify --quiet "refs/remotes/${REMOTE_REF}"; then
  REMOTE_HASH="$(git rev-parse --short "${REMOTE_REF}")"
  echo "[version] remote commit: ${REMOTE_HASH}"

  AHEAD_BEHIND="$(git rev-list --left-right --count "${REMOTE_REF}...HEAD")"
  BEHIND="${AHEAD_BEHIND%% *}"
  AHEAD="${AHEAD_BEHIND##* }"

  if [[ "${BEHIND}" == "0" && "${AHEAD}" == "0" ]]; then
    echo "[version] status: 最新 (与远端一致)"
  else
    echo "[version] status: 不是最新 (ahead=${AHEAD}, behind=${BEHIND})"
  fi
else
  echo "[version] remote ref not found: ${REMOTE_REF}"
fi
