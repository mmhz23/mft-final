import axios from "axios";

const getCreatorById = function (creators, id) {
  return creators.find((creator) => creator.id === id);
};

const renderCollection = function (collection, creator) {};
const renderCreator = function (creator) {};
const renderCategory = function (category) {};
const renderNFT = function (nft, creator) {};

const renderAllCollections = function (collections, creators) {
  collections.forEach((collection) => {
    const creator = getCreatorById(creators, collection.creator_id);
    renderCollection(collection, creator);
  });
};

const renderAllCreators = function (creators) {
  creators.forEach((creator) => {
    renderCreator(creator);
  });
};

const renderAllCategories = function (categories) {
  categories.forEach((category) => {
    renderCategory(category);
  });
};

const renderAllNFTs = function (nfts, creators) {
  nfts.forEach((nft) => {
    const creator = getCreatorById(creators, nft.creator_id);
    renderNFT(nft, creator);
  });
};

const fetchData = async function () {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/mmhosseinzadeh9190/mft-final/refs/heads/main/assets/data/data.json",
    );

    const collections = response.data.collections;
    const creators = response.data.creators;
    const categories = response.data.categories;
    const nfts = response.data.nfts;

    renderAllCollections(collections, creators);
    renderAllCreators(creators);
    renderAllCategories(categories);
    renderAllNFTs(nfts, creators);
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
  }
};
fetchData();
