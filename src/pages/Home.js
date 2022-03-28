import React from "react";

const Home = ()=>{

	return <React.Fragment>
		<div className="container-lg px-3 my-5 markdown-body">


			<h1 id="tiles">
				<a href="https://opensea.io/0xTiles">0xTiles</a>
			</h1>
			<p>
				An indie dev project, showcasing a cluster of vector graphics generated with a unique seed,
				based on different geometric shapes, patterns, and nine vibrant color palettes.
				Listed on Opensea gas-free marketplace at an initial price of 0.002ETH
			</p>

			<h5 id="rarity-breakdown">Rarity Breakdown:</h5>
			<table>
				<tbody>
					<tr>
						<td>Amethyst: 2%</td>
						<td>Sapphire: 4%</td>
						<td>Aquamarine: 7%</td>
					</tr>
					<tr>
						<td>Emerald: 9%</td>
						<td>Lime Quartz: 11%</td>
						<td>Citrine: 13%</td>
					</tr>
					<tr>
						<td>Amber: 16%</td>
						<td>Coral: 18%</td>
						<td>Ruby: 20%</td>
					</tr>
				</tbody>
			</table>


			<h2 id="starships"><a href="https://opensea.io/collection/0xstarships">0xStarShips</a></h2>
			<p>
				<strong>0xStarShips</strong> are alien battleships minted on Polygon chain, and the first collection from
				0xTiles.
				This collection is created as a tribute to the famous 70's arcade game <a
				href="https://en.wikipedia.org/wiki/Space_Invaders">Space Invaders</a> by "Tomohiro Nishikado".
			</p>
			<p>
				Every battleship in this collection is unique and with one of nine themes (viz. Amethyst, Sapphire, Aquamarine,
				Emerald, Lime Quartz, Citrine, Amber, Coral and Ruby) distributed with corresponding <a
				href="#rarity-breakdown">rarities</a>. Besides theme and unique design battleships also have stats, assigned
				names, deployed time and a unique generation seed distinguishing from each other.
			</p>


			<h2 id="events">Events</h2>
			<h3 id="starships-genesis">
				<a
					href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/34241269633590094293449787825843743375255914585019483216988307268857671722768">
					0xStarShips: Genesis
				</a>
			</h3>
			<ul>
				<li>This marks the official minting of the 0xStarShips collection and is used as a giveaway.</li>
				<li>The collectible x1 will be airdropped to random users based on their activity on the Polygon Mainnet.</li>
				<li>Users can also claim the genesis airdrop by adding the collectible as favorite ❤️ <a
					href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/34241269633590094293449787825843743375255914585019483216988307268857671722768">@opensea</a>,
					thus registering your interest in the initiative.
				</li>
			</ul>

			<h1/>

			<h3 id="upcoming-collections">Upcoming Collections...</h3>
			<p>
				<strong>
					<a href="https://opensea.io/collection/0xsquares">0xSquares</a> |&nbsp;
					<a href="https://opensea.io/collection/0xisogrids">0xIsogrids</a> |&nbsp;
					<a href="https://opensea.io/collection/0xisospins">0xIsoSpins</a>
				</strong>
			</p>

			<hr/>

			<div align="center">
				<img
					src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2F0xtiles.github.io&amp;count_bg=%236100D7&amp;title_bg=%23DB00D0&amp;icon=&amp;icon_color=%23FFFFFF&amp;title=visits&amp;edge_flat=false"
					alt="visits"/>
				<p>
					<a href="https://twitter.com/0xTiles">Twitter</a> |&nbsp;
					<a href="mailto:0xTiles@protonmail.com">Email</a>
				</p>
				<sub>
					Copyright ©2022 All rights reserved by <a
					href="https://polygonscan.com/address/0x4Bb3Df2f52952173FEbEc22a6314F0bBB5e18973">0xTiles</a>
				</sub>
			</div>

		</div>
	</React.Fragment>
}

export default Home;