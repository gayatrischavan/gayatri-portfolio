

export const Footer = () => {
  return (
    <footer className="py-8 bg-muted border-t border-border text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Gayatri Chavan. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2 opacity-75">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};