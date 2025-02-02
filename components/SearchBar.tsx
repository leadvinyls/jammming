'use client';
import styles from './SearchBar.module.css';
import MagnifyingGlass from '../icons/Icons';

export default function SearchBar() {
	return (
		<div className={styles.SearchBar}>
			<form className={styles.form}>
				<label className={styles.label} htmlFor="song">
					<MagnifyingGlass />
					<input
						className={styles.input}
						type="text"
						id="song"
						name="song"
						placeholder="Search a song"
						autoComplete="off"
					/>
				</label>
				<input type="submit" hidden />
			</form>
		</div>
	);
}
