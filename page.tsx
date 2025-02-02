'use client';
import styles from './page.module.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Tracklist';
import './globals.css';

export default function Jammming() {
	return (
		<div className={styles.App}>
			<header className={styles.AppHeader}>
				<h4 className={styles.h4}>
					Ja<i className={styles.i}>mmm</i>ing App
				</h4>
			</header>
			<main>
				<SearchBar />
				<SearchResults />
				<Playlist />
			</main>
		</div>
	);
}
