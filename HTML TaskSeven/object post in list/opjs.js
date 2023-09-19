/*this is in html page style 
const usersUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers() 
{
  try 
  {
    const response = await fetch(usersUrl);
    if (!response.ok) 
    {
      throw new Error('Network response was not ok');
    }

    const usersData = await response.json();
    return usersData;
  } 
  catch (error) 
  {
    console.error('Error fetching users:', error);
    throw error;
  }
}

async function fetchPosts(userId) 
{
  const postsUrl = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;

  try 
  {
    const response = await fetch(postsUrl);
    if (!response.ok) 
    {
      throw new Error('Network response was not ok');
    }

    const postsData = await response.json();
    return postsData;
  } 
  catch (error) 
  {
    console.error(`Error fetching posts for user ${userId}:`, error);
    throw error;
  }
}

async function displayUsersAndPosts() 
{
  const users = await fetchUsers();
  const userList = document.getElementById('user-posts-list');

  for (const user of users) 
  {
    const userItem = document.createElement('li');
    userItem.textContent = `${user.name} |`;

    const userPosts = await fetchPosts(user.id);

    const postList = document.createElement('ol');
    postList.setAttribute('type', 'a');

    for (let i = 0; i < userPosts.length; i++) 
    {
      const postItem = document.createElement('li');
      postItem.textContent = `Post${String.fromCharCode(97 + i)}: ${userPosts[i].title}`;
      postList.appendChild(postItem);
    }

    userItem.appendChild(postList);
    userList.appendChild(userItem);
  }
}

displayUsersAndPosts();
*/

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers() {
  try {
    const response = await fetch(usersUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const usersData = await response.json();
    return usersData;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

async function fetchPosts(userId) {
  const postsUrl = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;

  try {
    const response = await fetch(postsUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const postsData = await response.json();
    return postsData;
  } catch (error) {
    console.error(`Error fetching posts for user ${userId}:`, error);
    throw error;
  }
}

async function displayUsersAndPosts() {
  const users = await fetchUsers();

  for (const user of users) {
    console.log(`${user.name}:`);

    const userPosts = await fetchPosts(user.id);

    for (let i = 0; i < userPosts.length; i++) {
      console.log(`  Post  ${String.fromCharCode(97 + i)} : ${userPosts[i].title}`);
    }

    console.log(''); // Add an empty line between users for better readability
  }
}

displayUsersAndPosts();
