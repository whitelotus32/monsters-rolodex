import { Component } from "react";

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div>
                {monsters.map(monster => (
                    <div className='card-container'>
                        <img alt={`monsters ${monster.name}`} />
                    </div>
                ))}
            </div>
        )
    }
}

export default CardList;