import React from 'react';
import "../css/NavBar.css"
import requests from '../requests';

function NavBar({setChosenOption}) {
    return (
        <div className="navbar">
            <h3 onClick={() =>setChosenOption(requests.fetchTrending)}>Trending</h3>
            <h3 onClick={() =>setChosenOption(requests.fetchTopRated)}>Top Rated</h3>
            <h3 onClick={() =>setChosenOption(requests.fetchComedyMovies)}>Comedy</h3>
            <h3 onClick={() =>setChosenOption(requests.fetchRomanceMovies)}>Romance</h3>
            <h3 onClick={() =>setChosenOption(requests.fetchTV)}>Kids</h3>
            <h3 onClick={() =>setChosenOption(requests.fetchActionMovies)}>Action</h3>
            <h3 onClick={() =>setChosenOption(requests.fetchHorrorMovies)}>Horror/Suspense</h3>
            <h3 onClick={() =>setChosenOption(requests.fetchMystery)}>Mystery</h3>
            <h3 onClick={() =>setChosenOption(requests.fetchWestern)}>Western</h3>
            <h3 onClick={() =>setChosenOption(requests.fetchActionMovies)}>TV</h3>
        </div>
    )
}

export default NavBar
