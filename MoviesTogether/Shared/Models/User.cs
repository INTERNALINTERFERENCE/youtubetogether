using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesTogether.Shared.Models
{
    public class User
    {
        public string Name { get; set; }

        public string ConnectionId { get; set; }

        public Room Room { get; set; }

        public User(string connectionId)
        {
            ConnectionId = connectionId;
            Name = "Anonymous_" + connectionId.Substring(connectionId.Length - 4);
        }

        public User(string connectionId, string name)
        {
            ConnectionId = connectionId;
            Name = name;
        }
    }
}
