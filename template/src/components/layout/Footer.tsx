import { useCounter } from '@/stores/counter';

function Footer() {
  const { count } = useCounter(); // added for demo purpose

  return (
    <footer className="border-t px-6 py-3 text-sm text-center text-gray-500">
      React Template &copy; {new Date().getFullYear()} {count}
    </footer>
  );
}

export default Footer;
