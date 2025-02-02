import React from 'react';
import styles from './page.module.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Tracklist';

export default function App() {
	return (
		<div className={styles.App}>
			<header className={styles.AppHeader}>
				<h4>
					Ja<i>mmm</i>ing App
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
