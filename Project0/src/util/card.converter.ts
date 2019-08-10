import Card from '../models/card';
import { Quality } from '../models/quality';
import User from '../models/user';
import { Game } from '../models/game';

export function cardConverter(row) {
    return new Card(row.card_id, row.card_name, row.card_value,
        new Quality(row.quality_id, row.quality_label),
        row.user_id && new User(row.user_id, row.username, '', row.email, row.first_name, row.last_name, row.phone, row.role),
        new Game(row.game_id, row.game_name, row.producer));
}