export default function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Update URL hash without jumping
    window.history.replaceState(null, '', `#${id}`);
  }
}
