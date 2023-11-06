import clsx from 'clsx';
import { Link } from "@remix-run/react"

function Office({ name, children, invert = false }) {
    return (
        <address
            className={clsx(
                'text-sm not-italic',
                invert ? 'text-neutral-300' : 'text-neutral-600'
            )}
        >
            <strong className={invert ? 'text-white' : 'text-neutral-950'}>
                {name} <span aria-hidden="true">→</span>
            </strong>
            <br />
            {children}
        </address>
    );
}

export function Meetups({ invert = false, ...props }) {
    return (
        <ul {...props}>
            <li>
                <Office name="Online experiences" invert={invert}>
                    <a href="/experiences">
                        vivawebdesign.dev/experiences
                    </a>
                    <br />
                </Office>
            </li>
            <li>
                <Office name="Design examples" invert={invert}>
                    <a href="/design">
                        vivawebdesign.dev/design
                    </a>
                    <br />
                </Office>
            </li>
        </ul>
    );
}
export function Support({ invert = false, ...props }) {
    return (
        <ul {...props}>
            <li>
                <Office name="devSA Discord" invert={invert}>
                    <a href="https://discord.gg/f3gnmjScW3">discord.gg/devSA</a>
                    <br />
                </Office>
            </li>
            <li>
                <Office name="devSA Events" invert={invert}>
                    <Link to="/events">
                        devsanantonio.com/events
                    </Link>
                    <br />
                </Office>
            </li>
        </ul>
    );
}