import Link from 'next/link';

export const CustomH2 = (props: any) => (
  <h2 
    className="text-3xl font-bold font-raleway mt-12 mb-4 pb-2 border-b border-neutral-200 text-neutral-700" 
    {...props} 
  />
);

export const CustomP = (props: any) => (
  <p 
    className="my-6 text-md leading-relaxed text-neutral-800" 
    {...props} 
  />
);

export const CustomUl = (props: any) => (
  <ul 
    className="my-6 pl-6 list-disc space-y-2" 
    {...props} 
  />
);

export const CustomLi = (props: any) => (
  <li 
    className="pl-2 text-md leading-relaxed text-neutral-800 marker:text-blue-600" 
    {...props} 
  />
);

export const CustomA = (props: any) => (
  <Link 
    href={props.href || ''} 
    className="font-semibold text-blue-600 hover:underline" 
    {...props} 
  />
);

export const CustomBlockquote = (props: any) => (
  <blockquote 
    className="my-6 py-2 px-4 border-l-4 border-blue-500 bg-neutral-200 text-neutral-600 italic" 
    {...props} 
  />
);

export const CustomHr = () => (
    <hr className="my-12 border-neutral-400" />
);