import clsx from 'clsx';
import methodTitle from './styles/methodTitle.module.css';

export default function EndpointTitle({ children }) {
    const [method, routeName] = children.props.children.split(" ")
    return (
        <div className={methodTitle.title_container}>
            <p className={clsx(methodTitle.method, methodTitle[method])}>{method}</p> <code>{routeName}</code>
        </div>
    )
}