export default defineUnlistedScript(() => {
  const removeHubNag = () => {
    const hubButton = document.querySelector('hub-button-app');
    if (!hubButton) return false;

    // Prefer removing wrapper container; fall back to removing the element itself.
    (hubButton.closest('div') ?? hubButton).remove();
    return true;
  };

  if (removeHubNag()) return;

  const observer = new MutationObserver(() => {
    if (!removeHubNag()) return;
    observer.disconnect();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
});
