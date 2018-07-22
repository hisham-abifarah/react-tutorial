// will have list of all actions

// action creator which is a function
export function moviesList(){
    return {
        type: 'MOVIES_LIST',
        payload:[
            {id:"1" , name: "Movie 1"},
            {id:"2" , name: "Movie 2"},
            {id:"3" , name: "Movie 3"}
        ]
    }
}

export function directorsList(){
    return {
        type: 'DIR_LIST',
        payload:[
            {id:"1" , name: "Dir 1"},
            {id:"2" , name: "Dir 2"}
        ]
    }
}