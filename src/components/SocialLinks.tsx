import { SiGithub, SiLinkedin, SiGmail} from 'react-icons/si';

export const SocialIcons = () => (
    <div className="flex justify-center content-center items-center gap-10 h-20 p-5 font-bold bg-not-blue dark:bg-background-dark text-bg-light dark:text-bg-primary">
        <a href="https://github.com/iru-codes" target="_blank" rel="noopener noreferrer">
        <SiGithub className="w-7 h-7 hover:text-accent-2 dark:hover:text-accent transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" /></a>
        <a href="https://www.linkedin.com/in/aixairupe/" target="_blank" rel="noopener noreferrer">
        <SiLinkedin className="w-7 h-7 hover:text-accent-2 dark:hover:text-accent transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" /></a>
        <a href="mailto:aixairupe992@gmail.com" target="_blank" rel="noopener noreferrer">
        <SiGmail className="w-7 h-7 hover:text-accent-2 dark:hover:text-accent transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" /></a>
    </div>
);
