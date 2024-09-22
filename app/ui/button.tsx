import clsx from 'clsx';
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function PopoverButton() {
  return (
    <Popover>
      <PopoverTrigger>
        <button className="bg-transparent text-sky-200 px-2 py-1 transition hover:text-violet-600 hover:scale-[1.13]">
          Gợi ý :)
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="bg-sky-900 p-4 rounded-lg shadow-lg shadow-cyan-300 text-emerald-50">
          <p className='line-through'>aan@cloodey</p>
          <p className='line-through'>123456</p>
          <p>
            Bí mật!{' '}
            <i className="fa-solid fa-ban ms-[1px] text-lg mt-1" style={{ color: '#d31d53' }}></i>
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}