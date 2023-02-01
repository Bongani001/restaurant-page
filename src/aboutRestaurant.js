import TheImg from './restaurant.jpg';

const aboutRestaurant = () => {
    const content = document.querySelector('#content');
    

    // First element
    const heading = document.createElement('p');
    heading.innerHTML = 'The Little Lemon Restaurant';
    content.appendChild(heading);
    

    // Second element
    const pic = new Image();
    pic.src = TheImg;
    content.appendChild(pic);

    // Third element
    const about = document.createElement('p');
    about.innerHTML = 'We are a family owned Mediterranian restuarant, focused on traditional recipes served with a modern twist.';
    content.appendChild(about);


    return content;
}

export {aboutRestaurant};