import { Link, useFetcher } from '@remix-run/react';
import {
    createContext,
    useContext,
    useEffect,
    useId,
    useRef,
    useState,
} from 'react';
import clsx from 'clsx';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { Container } from '~/components/Container';
import { Meetups } from '~/components/Meetups';
import { Footer } from '~/components/Footer';
import { Button } from '~/components/Button';
import { SocialMedia } from '~/components/SocialMedia';
import { VivaLogo } from '~/components/Logo';

const RootLayoutContext = createContext({});

function XIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
            <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
        </svg>
    );
}

function MenuIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M2 6h20v2H2zM2 16h20v2H2z" />
        </svg>
    );
}

function NavBar({
    panelId,
    invert = false,
    icon: Icon,
    expanded,
    onToggle,
    toggleRef,
}) {
    let { logoHovered, setLogoHovered } = useContext(RootLayoutContext);

    return (
        <Container className="">
            <div className="flex items-center justify-between">
                <Link
                    to="/"
                    aria-label="Home"
                    onMouseEnter={() => setLogoHovered(true)}
                    onMouseLeave={() => setLogoHovered(false)}
                >
                    <VivaLogo
                        className={clsx(
                            'h-8 w-auto md:h-10 lg:h-12',
                            invert
                                ? 'fill-white group-hover:fill-neutral-200'
                                : 'group-hover:fll-neutral-700 fill-neutral-950',
                            logoHovered ? 'animate-pulse' : ''
                        )}
                    />
                </Link>
                <div className="flex items-center gap-x-8">
                    <Button
                        href="/showcase"
                        invert={false}
                        className={clsx(
                            'group -m-2.5 rounded-full p-2.5 transition',
                            'hidden sm:block'
                        )}
                    >
                        Showcase
                    </Button>
                    <button
                        ref={toggleRef}
                        type="button"
                        onClick={onToggle}
                        aria-expanded={expanded.toString()}
                        aria-controls={panelId}
                        className={clsx(
                            'group -m-2.5 rounded-full p-2.5 transition',
                            invert
                                ? 'hover:bg-white/10'
                                : 'hover:bg-neutral-950/10'
                        )}
                        aria-label="Toggle navigation"
                    >
                        <Icon
                            className={clsx(
                                'h-6 w-6',
                                invert
                                    ? 'fill-white group-hover:fill-neutral-200'
                                    : 'group-hover:fll-neutral-700 fill-neutral-950'
                            )}
                        />
                    </button>
                </div>
            </div>
        </Container>
    );
}

function NavigationRow({ children }) {
    return (
        <div className="even:mt-px sm:bg-neutral-950">
            <Container className="">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {children}
                </div>
            </Container>
        </div>
    );
}

function NavigationItem({ href, children }) {
    return (
        <Link
            to={href}
            className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
        >
            {children}
            <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
        </Link>
    );
}

function Navigation() {
    return (
        <nav className="font-display mt-px text-5xl font-medium tracking-tight text-white">
            <NavigationRow>
                <NavigationItem href="/services">
                    Creative web design
                </NavigationItem>
                <NavigationItem href="/services">
                    Marketing campains
                </NavigationItem>
            </NavigationRow>
            <NavigationRow>
                <NavigationItem href="/contact">Contact us</NavigationItem>
                <NavigationItem href="showcase">Showcase</NavigationItem>
            </NavigationRow>
        </nav>
    );
}

function RootLayoutInner({ children }) {
    let panelId = useId();
    let [expanded, setExpanded] = useState(false);
    let openRef = useRef();
    let closeRef = useRef();
    let navRef = useRef();
    let shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        function onClick(event) {
            if (event.target.closest('a')?.href === window.location.href) {
                setExpanded(false);
            }
        }

        window.addEventListener('click', onClick);

        return () => {
            window.removeEventListener('click', onClick);
        };
    }, []);

    return (
        <MotionConfig
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
        >
            <header>
                <div
                    className="absolute left-0 right-0 top-2 z-40 pt-14"
                    aria-hidden={expanded ? 'true' : undefined}
                    inert={expanded ? '' : undefined}
                >
                    <NavBar
                        panelId={panelId}
                        icon={MenuIcon}
                        toggleRef={openRef}
                        expanded={expanded}
                        onToggle={() => {
                            setExpanded((expanded) => !expanded);
                            window.setTimeout(
                                () =>
                                    closeRef.current?.focus({
                                        preventScroll: true,
                                    })
                            );
                        }}
                    />
                </div>

                <motion.div
                    layout
                    id={panelId}
                    style={{ height: expanded ? 'auto' : '0.5rem' }}
                    className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
                    aria-hidden={expanded ? undefined : 'true'}
                    inert={expanded ? undefined : ''}
                >
                    <motion.div layout className="bg-neutral-800">
                        <div
                            ref={navRef}
                            className="bg-neutral-950 pb-16 pt-14"
                        >
                            <NavBar
                                invert
                                panelId={panelId}
                                icon={XIcon}
                                toggleRef={closeRef}
                                expanded={expanded}
                                onToggle={() => {
                                    setExpanded((expanded) => !expanded);
                                    window.setTimeout(
                                        () =>
                                            openRef.current?.focus({
                                                preventScroll: true,
                                            })
                                    );
                                }}
                            />
                        </div>
                        <Navigation />
                        <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
                            <Container className="">
                                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                                    <div>
                                        <h2 className="font-display text-base font-semibold text-white">
                                            Viva Web Design &mdash;{' '}
                                            <span className="text-spursPink">
                                                Hablamos Español
                                            </span>
                                        </h2>
                                    </div>
                                    <div className="sm:border-l sm:border-transparent sm:pl-16">
                                        <h2 className="font-display text-base font-semibold text-white">
                                            Let's connect
                                        </h2>
                                        <SocialMedia className="mt-6" invert />
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </motion.div>
                </motion.div>
            </header>

            <motion.div
                layout
                style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                className="relative flex flex-auto overflow-hidden bg-white pt-14"
            >
                <motion.div
                    layout
                    className="relative isolate flex w-full flex-col pt-9"
                >
                    <main className="w-full flex-auto">{children}</main>

                    <Footer />
                </motion.div>
            </motion.div>
        </MotionConfig>
    );
}

export function RootLayout({ children }) {
    let pathname = useFetcher();
    let [logoHovered, setLogoHovered] = useState(false);

    return (
        <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
            <RootLayoutInner key={`${pathname}`}>{children}</RootLayoutInner>
        </RootLayoutContext.Provider>
    );
}
