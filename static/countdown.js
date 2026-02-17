(function () {
  function parseEventDate(s) {
    if (!s) return null;
    const trimmed = String(s).trim();
    const m = trimmed.match(/^(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2})$/);
    let iso = trimmed;
    if (m) iso = `${m[1]}T${m[2]}:00`;
    const d = new Date(iso);
    if (isNaN(d.getTime())) return null;
    return d;
  }

  function fmtCountdown(ms) {
    if (ms <= 0) return "läuft";
    const totalSec = Math.floor(ms / 1000);
    const days = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    const pad = (n) => String(n).padStart(2, "0");
    if (days > 0) return `${days}d ${pad(hours)}:${pad(mins)}:${pad(secs)}`;
    return `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
  }

  function update() {
    const ev = parseEventDate(window.LMC_EVENT_DATE || "");
    const targets = [
      document.getElementById("countdown"),
      document.getElementById("countdownInline"),
    ].filter(Boolean);

    if (!targets.length) return;

    if (!ev) {
      targets.forEach(t => t.textContent = "—");
      return;
    }

    const now = new Date();
    const ms = ev.getTime() - now.getTime();
    targets.forEach(t => t.textContent = fmtCountdown(ms));
  }

  update();
  setInterval(update, 1000);
})();