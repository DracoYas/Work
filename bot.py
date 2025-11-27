import os
import json
import asyncio
from dotenv import load_dotenv
import discord
from discord.ext import commands


load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')
GUILD_ID = int(os.getenv('GUILD_ID')) if os.getenv('GUILD_ID') else None
MOD_LOG_CHANNEL_ID = int(os.getenv('MOD_LOG_CHANNEL_ID')) if os.getenv('MOD_LOG_CHANNEL_ID') else None


intents = discord.Intents.all()
bot = commands.Bot(command_prefix='!', intents=intents, help_command=None)

###charger les cogs
initial_extensions = [
'cogs.moderation',
'cogs.automod',
'cogs.logger',
'cogs.admin',
]


@bot.event
async def on_ready():
    print(f'Connecté en tant que {bot.user} (ID: {bot.user.id})')
    try:
        synced = await bot.tree.sync(guild=discord.Object(id=GUILD_ID)) if GUILD_ID else await bot.tree.sync()
        print(f"Slash commands synchronisées: {len(synced)}")
    except Exception as e:
        print('Erreur sync:', e)


if __name__ == '__main__':
    # Comment out cog loading since cogs do not exist yet
    # for ext in initial_extensions:
    #     try:
    #         bot.load_extension(ext)
    #         print(f'Cog chargé: {ext}')
    #     except Exception as e:
    #         print(f'Erreur chargement {ext}:', e)
    bot.run(TOKEN)
