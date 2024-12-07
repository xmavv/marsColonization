export function formatDuration(duration: number) {
  const mins = Math.floor(duration / 60);
  const secs = duration % 60;

  return mins === 0 ? `${secs}s` : `${mins}min ${secs}s`;
}
