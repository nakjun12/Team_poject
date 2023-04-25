import styles from "./Category.module.scss";

type Props = {
  text?: string;
};

export default function Category({ text }: Props) {
  return <button className={styles.category}>{text}</button>;
}
