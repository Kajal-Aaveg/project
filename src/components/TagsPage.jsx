import React, { useState, useRef } from "react";
import { useEffect } from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate, useParams } from "react-router-dom";

function TagsPage() {
  const [firstImgLink, setFirstImageLink] = useState(null);
  const[relatedTag,setrelatedTag]=useState([]);

  const divRef = useRef(null);

  const [resdatablog, setFavBlog] = useState();
  const [favData, setFavData] = useState([]);
 

  const limitText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  // Set the maximum number of characters you want to display
  const maxCharacters = 200;

  const createMarkup = (content) => ({ __html: content });

  // const createMarkup = (html) => {
  //   // Sanitize the HTML using DOMPurify to prevent XSS attacks
  //   // const sanitizedHtml = DOMPurify.sanitize(html);

  //   return { __html: sanitizedHtml };
  // };

  const extractTextWithoutTags = (html) => {
    // Remove HTML tags and trim the content
    const plainText = html.replace(/<[^>]*>/g, "").trim();

    // Get the first 200 characters

    const limitedText = plainText.slice(0, 200);
    return { __html: limitedText };
    // return limitedText;
  };

  // useEffect(() => {
  //   const funcData = async () => {
  //     const result = await fetch(
  //       "https://www.wticarrental.ae:3000/0auth/Blog/getBlogforParticularTag/fitness",
  //       {
  //         method: "GET",
  //       }
  //     );

  //     // let response = await axios.get("http://43.205.205.54:5000/0auth/Blog/getFavCategoriesblog")
  //     const resdatablog = await result.json();

  //     setFavBlog(resdatablog);
  //     let resObj = resdatablog[0];
  //     // resdatablog.push(resObj);
  //     setFavData(resdatablog);
  //     setFirstImageLink(resdatablog[0].image);
  //     console.log(favData);
  //   };

  //   funcData();
  // }, []);
  const{tag}=useParams();
  console.log(tag);

  useEffect(() => {
    const funcData = async () => {
      const formattedtags =  tag.replace(/-/g, ' ');
 
      try {
        const result = await fetch(
          `https://www.wticarrental.ae:3000/0auth/Blog/getBlogforParticularTag/${formattedtags}`,
          {
            method: "GET",
          }
        );
  
        if (!result.ok) {
          throw new Error(`HTTP error! Status: ${result.status}`);
        }
  
        const resdatablog = await result.json();
        console.log(resdatablog);
        setrelatedTag(resdatablog);
        // setFavBlog(resdatablog);
        // // console.log(favData);
        // setFavData(resdatablog);
        // setFirstImageLink(resdatablog[0].image);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error or set a default state
      }
    };
  
    funcData();
  }, [tag]);
  

  const funcDate = (timestamp) => {
    try {
      const date = new Date(timestamp);

      if (isNaN(date.getTime())) {
        // Invalid timestamp or date string
        throw new Error("Invalid time value");
      }

      const formattedDate = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(date);

      return formattedDate;
    } catch (error) {
      console.error("Error formatting timestamp:", error.message);
      return "Invalid Date";
    }
  };

  // const Navigate = useNavigate();
  // const handleClick = (slug) => {
  //   Navigate(`/blog/${slug}`);
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // };

  const Navigate=useNavigate();
  const handleClick = (slug,categoryName) => {
    const formattedCategoryName = categoryName.replace(/\s+/g, '-');
    Navigate(`/blog/${formattedCategoryName}/${slug}`)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    
  };
  

  return (
    <div>
      <div className="flex max-sm:block ">
        <div className="w-[60%]  px-10  max-sm:w-full max-sm:h-full ">
          <h1 className="font-bold pt-6 ">Tag - {tag} </h1>
          <div className="flex  pb-3">
            <div className="w-[18%] h-1 bg-black  "></div>
            <div className="w-[100%] h-[1px] bg-stone-200 my-[1.5px]  "></div>
          </div>
          <div className="w-full mt-2">
            <div className=" ">
              {relatedTag?.map((data, index) => (
                <div
                  className="flex  max-sm:block max-sm:pt-4"
                  key={index}
                  onClick={() => handleClick(data?.slugs, data.categories)}
                >
                  <div className="w-[50%] cursor-pointer hover:scale-[1.008]  h-[13rem] mb-7 max-sm:w-full ">
                    <img
                      src={data?.image}
                      alt=""
                      className="w-full rounded h-full "
                    />
                  </div>
                  <div className="w-[50%]  px-4 max-sm:w-full max-sm:px-0  ">
                    <a href="" className="font-bold cursor-pointer  ">
                      {data?.title}
                    </a>
                    <div className="w-[100%] pt-4" ref={divRef}>
                      {/* <a href="" className=' cursor-pointer' >{data.para}</a> */}
                      {/* <p className="" dangerouslySetInnerHTML={createMarkup(data?.paragraph.slice(0,300))}/> */}
                      <p
                        className="text-[10pt]"
                        dangerouslySetInnerHTML={extractTextWithoutTags(
                          data?.paragraph
                        )}
                      />
                    </div>
                    <div className="flex mt-11">
                      <p className=" text-[12px] pr-2 text-stone-400 flex justify-between items-center gap-1 ">
                        <DateRangeIcon className="text-[20px] " />
                        {funcDate(data?.createdAt)}
                      </p>
                      <div className=" text-[12px] items-center flex gap-1  text-stone-400">
                        <AccessTimeIcon className="text-[20px] " />
                        {data?.readingtime}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="w-full h-auto">
                                <Stack spacing={2}>
                                  <Pagination count={10} />
                                </Stack>
                              </div> */}
          </div>
        </div>
        {/* <div className="w-[40%] max-sm:w-full ">
                            <div className="  mx-10 mt-20 max-sm:mt-10">
                              <div className="p-4 w-[50%] max-sm:px-0 max-sm:w-full ">
                                <h1 className="text-[14px] font-bold  ">Tags:</h1>
                              </div>
                              
                                
                      <div className="grid grid-cols-3 gap-1  ">
                      {favData.map((itemTags, index) => (
                            <div key={index} className=" rounded" >
                            <div className="text-center p-1  bg-white hover:bg-indigo-950 hover:text-white text-black border rounded mt-[10px] max-sm:w-full max-sm:mb-2"> {itemTags.tags.split(',')[0]}</div>
                            </div>
                          ))}
                      </div>  
                            </div>
                          </div> */}
      </div>
    </div>
  );
}

export default TagsPage;
