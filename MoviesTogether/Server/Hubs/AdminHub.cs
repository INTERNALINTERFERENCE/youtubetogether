using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesTogether.Server.Hubs
{
    public class AdminHub : Hub
    {
        public async Task GetAllRooms()
        {
            var roomsList = RoomHandler.Rooms.Select(r => r.Name).ToList();
            await Clients.Caller.SendAsync("ReceiveRooms", roomsList);
        }
    }
}
