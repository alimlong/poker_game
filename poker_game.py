#!/usr/bin/env python
# -*- coding:utf-8 -*-
# @time:  14:18
# @Author: Alim
# @File: poker_game.py
# @Software: PyCharm
import random


def pick_poker(data, user):
    select_row = random.choice([key for key in data if data[key] != 0])
    # print(f'select row:{select_row}')
    pick_num = random.randint(1, data[select_row])
    data[select_row] -= pick_num
    print(f'{user} pick {pick_num} poker from row {select_row}, left poker {list(data.values())}')
    if sum([data[key] for key in data]) == 0:
        return True
    else:
        return False


def poker_game(data, users):
    operator = random.randint(0, len(users) - 1)
    print(f'=======> Poker game start, {users[operator]} first!')

    while True:
        rlt = pick_poker(data, users[operator])
        if rlt:
            print(f'=======> Game over, {users[operator]} lose')
            break
        operator = (operator + 1) % 2


if __name__ == '__main__':
    users = ['USER_One', 'USER_Two']
    game_data = {
        1: 3,
        2: 5,
        3: 7
    }

    poker_game(game_data, users)
