import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Border } from '~/components/Border';

export function ContactSection() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn className="-mx-6 rounded-3xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
                <div className="mx-auto max-w-4xl">
                    <div className="max-w-xl">
                        <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                            Create your online experience with{' '}
                            <span className="font-bold">Viva Web Design</span>
                        </h2>
                        <p className="mt-6 text-xl text-white sm:text-2xl">
                            Now that you know what we're about, let's connect
                            and see what we can do for you
                        </p>
                        <div className="mt-6 flex">
                            <Button href="/contact" invert>
                                Contact us
                            </Button>
                        </div>
                        <div className="mt-6 border-t border-white/10 pt-6">
                            <Border className="">
                                <h2 className="font-display text-base font-semibold text-white">
                                    You can also send an email to{' '}
                                    <a
                                        href="mailto:jesse@vivawebdesign.dev"
                                        className="font-bold text-centroCyan"
                                    >
                                        jesse@vivawebdesign.dev
                                    </a>
                                </h2>
                            </Border>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Container>
    );
}
