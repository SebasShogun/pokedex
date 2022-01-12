import React from "react";

const FavoriteContext = React.createContext({
    favoriteContext: [],
    updateFavoritePokemon: (id) => null
})

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext