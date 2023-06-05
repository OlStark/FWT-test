import { useEffect, useState } from "react";
import Card from "./components/Cards/Cards";
import "./App.scss";
import PictureService from "./API/PictureService";
import { getPageCount } from "./components/utils/pages";
import { Pagination } from "fwt-internship-uikit";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./providers/ThemeProvider";
import Layout from "./components/Layout/Layout";

function App() {
  // Изображения
  const [data, setData] = useState([]);
  // Массив с авторами
  const [authors, setAuthors] = useState([]);
  // Массив с локациями
  const [locations, setLocations] = useState([]);
  //Пагинация
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(9);
  const [page, setPage] = useState(1);
  //Поиск
  const [searchQuery, setSearchQuery] = useState("");
  // Поиск по автору
  const [authorId, setAuthorsId] = useState([]);
  // Поиск по локации
  const [locationId, setLocationId] = useState([]);
  // Фильтрация от-до
  const [firstNum, setFirstNum] = useState([]);
  const [lastNum, setLastNum] = useState([]);

  const [defaultAuthor] = useState("Author");
  const [defaultLocation] = useState("Location");
  const [created] = useState("Created");

  const [currentAuthor, setCurrentAuthor] = useState(defaultAuthor);
  const [currentLocation, setCurrenLocation] = useState(defaultLocation);

  const [boolOption, setBoolOption] = useState(true);

  async function fetchAuthors() {
    const dataAuthors = await PictureService.getAuthors();
    const dataLocation = await PictureService.getLocation();
    setAuthors(() => dataAuthors.data);
    setLocations(dataLocation.data);
  }

  useEffect(() => {
    // Получение данных с сервера
    async function fetchPosts() {
      const data = await PictureService.getPic(
        limit,
        page,
        searchQuery,
        authorId,
        locationId,
        firstNum,
        lastNum
      );

      //Запись в store
      setData(data.data);

      const totalCount = data.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }

    fetchPosts();
    fetchAuthors();
  }, [page, limit, searchQuery, authorId, locationId, firstNum, lastNum]);

  //Общие данные(data, authors, locations)
  const picture = data.map((item) => {
    return {
      ...item,
      author: authors.find((auth) => auth.id === item.authorId),
      location: locations.find((loc) => loc.id === item.locationId),
    };
  });

  const changePage = (page) => {
    setPage(page);
  };
  //Поиск по названию
  const searching = (searchQuery) => {
    setSearchQuery(searchQuery);
  };
  //Поиск по датам
  const searchingOfFirstDate = (firstNum) => {
    setFirstNum(firstNum);
  };
  const searchingOfLastDate = (lastNum) => {
    setLastNum(lastNum);
  };
  //Отображение выбранного автора
  const chooseAuthor = (id, name) => {
    setAuthorsId(id);
    setCurrentAuthor(name);
  };

  //Отображение выбранной локации
  const chooseLocation = (id, name, location) => {
    setCurrenLocation(location);
    setLocationId(id);
  };
  // Сброс поиска по автору
  const setDefaultAuthor = () => {
    setCurrentAuthor(defaultAuthor);
    setAuthorsId([]);
  };
  // Сброс поиска по локации
  const setDefaultLocation = () => {
    setCurrenLocation(defaultLocation);
    setLocationId([]);
  };

  return (
    <div className="App">
      <ThemeProvider>
        <Layout>
          <div className="wrapper">
            <Header
              authors={authors}
              locations={locations}
              searchQuery={searchQuery}
              searching={searching}
              setSearchQuery={setSearchQuery}
              authorId={authorId}
              chooseAuthor={chooseAuthor}
              chooseLocations={chooseLocation}
              searchingOfFirstDate={searchingOfFirstDate}
              searchingOfLastDate={searchingOfLastDate}
              firstNum={firstNum}
              lastNum={lastNum}
              currentAuthor={currentAuthor}
              currentLocation={currentLocation}
              created={created}
              setDefaultAuthor={setDefaultAuthor}
              setDefaultLocation={setDefaultLocation}
              defaultAuthor={defaultAuthor}
              defaultLocation={defaultLocation}
              boolOption={boolOption}
              setBoolOption={setBoolOption}
            />
            <Card picture={picture} />
            <Pagination
              currentPage={page}
              pagesAmount={totalPages}
              onChange={changePage}
              isDarkTheme={boolOption}
            />
          </div>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
