export default function useScrollTo() {
  return {
    scroll: (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
  };
}
