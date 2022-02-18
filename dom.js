document.getElementById('add-border').addEventListener('click', function(){
    const friendContainer = document.getElementById('friend-container');
    friendContainer.style.border = '1px solid yellow';
});

function addBackgroundColor(){
const friends = document.getElementsByClassName('friend');

for(const friend of friends){
    friend.style.backgroundColor = 'yellow';
}
};

document.getElementById('addFriend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendDive = document.createElement('div');
    friendDive.classList.add('friend');
    friendDive.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
        <p>Veniam, quam?</p>
    `;
    container.appendChild(friendDive);
})